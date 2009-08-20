SRC_DIR = ./src
BUILD_DIR = ./build
DOC_DIR = ./doc
DIST_DIR = ./dist

FILES_TOP = ${SRC_DIR}/top.txt\
	${SRC_DIR}/Object.js\
	${SRC_DIR}/Number.js\
	${SRC_DIR}/Math.js\
	${SRC_DIR}/String.generic.js\
	${SRC_DIR}/Array.generic.js\
	${SRC_DIR}/String.js

FILES15 = ${FILES_TOP}\
	${SRC_DIR}/Array16.js\
	${SRC_DIR}/Array18.js\
	${SRC_DIR}/Array.js\
	${SRC_DIR}/Array.old.js\
	${SRC_DIR}/Functions.browser.js

FILES17 = ${FILES_TOP}\
	${SRC_DIR}/Array18.js\
	${SRC_DIR}/Array.js\
	${SRC_DIR}/Array.old.js\
	${SRC_DIR}/Array.iterator.js\
	${SRC_DIR}/Getters.js\
	${SRC_DIR}/Functions.js

FILES18 = ${FILES_TOP}\
	${SRC_DIR}/Array.js\
	${SRC_DIR}/Array.new.js\
	${SRC_DIR}/Array.iterator.js\
	${SRC_DIR}/Getters.js\
	${SRC_DIR}/Functions.js

WRENCH15 = ${DIST_DIR}/wrench15.js
WRENCH17 = ${DIST_DIR}/wrench17.js
WRENCH18 = ${DIST_DIR}/wrench18.js

WRENCH15_MIN = ${DIST_DIR}/wrench15.min.js

WRENCH_VER = `cat version.txt`
VER = sed s/@VERSION/${WRENCH_VER}/
VER15 = sed s/@JSVER/1.5/
VER17 = sed s/@JSVER/1.7/
VER18 = sed s/@JSVER/1.8/

MINJAR = java -jar ${BUILD_DIR}/yuicompressor-2.4.2.jar

TAR_NAME = wrench-${WRENCH_VER}.tar.gz
ZIP_NAME = wrench-${WRENCH_VER}.zip

all: wrench min
	@@echo "Wrench build complete."

wrench: ${WRENCH15} ${WRENCH17} ${WRENCH18}
min: ${WRENCH15_MIN}

${DIST_DIR}:
	@@mkdir -p ${DIST_DIR}

wrench15: ${WRENCH15}
${WRENCH15}: ${DIST_DIR} ${FILES15}
	@@echo -n "Building" ${WRENCH15}
	@@cat ${FILES15} | ${VER15} | ${VER} > ${WRENCH15};
	@@echo " - Done"
	@@echo

wrench17: ${WRENCH17}
${WRENCH17}: ${DIST_DIR} ${FILES17}
	@@echo -n "Building" ${WRENCH17}
	@@cat ${FILES17} | ${VER17} | ${VER} > ${WRENCH17};
	@@echo " - Done"
	@@echo

wrench18: ${WRENCH18}
${WRENCH18}: ${DIST_DIR} ${FILES18}
	@@echo -n "Building" ${WRENCH18}
	@@cat ${FILES18} | ${VER18} | ${VER} > ${WRENCH18};
	@@echo " - Done"
	@@echo

${WRENCH15_MIN}: ${WRENCH15}
	@@echo -n "Building" ${WRENCH15_MIN}
	@@echo " - Compressing using YUI Compressor"
	@@${MINJAR} ${WRENCH15} > ${WRENCH15_MIN}
	@@echo "Done..."
	@@echo

clean:
	@@echo "Removing Distribution directory:" ${DIST_DIR}
	@@rm -rf ${DIST_DIR}
	@@echo

docs:
	-rm -r ${DOC_DIR}
	java -jar ${BUILD_DIR}/jsdoc-toolkit/jsrun.jar ${BUILD_DIR}/jsdoc-toolkit/app/run.js\
		-allfunctions \
		-d=${DOC_DIR}/ \
		-t=${BUILD_DIR}/template \
		-D=rev:`git rev-parse --verify HEAD` \
		-E=Array.new.js ${SRC_DIR}/

runtests: all
	cd test; java -jar ../build/js.jar clitest.js

# Distribution
${DIST_DIR}/build: ${DIST_DIR}
	-@@mkdir ${DIST_DIR}/build

${DIST_DIR}/src: ${DIST_DIR}
	-@@mkdir ${DIST_DIR}/src
${DIST_DIR}/src/*: ${DIST_DIR}/src ${SRC_DIR}/*
	@@cp ${SRC_DIR}/* ${DIST_DIR}/src/
${DIST_DIR}/build/js.jar: ${DIST_DIR}/build ${BUILD_DIR}/js.jar
	@@cp ${BUILD_DIR}/js.jar ${DIST_DIR}/build/
${DIST_DIR}/build/yuicompressor-2.4.2.jar: ${DIST_DIR}/build ${BUILD_DIR}/yuicompressor-2.4.2.jar
	@@cp ${BUILD_DIR}/yuicompressor-2.4.2.jar ${DIST_DIR}/build/
${DIST_DIR}/Makefile: ./Makefile
	@@cp ./Makefile ${DIST_DIR}
${DIST_DIR}/README: ./README
	@@cp ./README ${DIST_DIR}
${DIST_DIR}/version.txt: ./version.txt
	@@cp ./version.txt ${DIST_DIR}
${DIST_DIR}/test: ./test ./test/* ./test/tests/*
	@@cp -r ./test ${DIST_DIR}
${DIST_DIR}/doc: docs
	@@cp -r ${DOC_DIR} ${DIST_DIR}

# Note: doc/ is not yet ready for packaging. It uses absolute references to monkeyscript.org for some static components.
build-dist: all ${DIST_DIR}/src/* ${DIST_DIR}/build/js.jar ${DIST_DIR}/build/yuicompressor-2.4.2.jar ${DIST_DIR}/Makefile ${DIST_DIR}/README ${DIST_DIR}/version.txt ${DIST_DIR}/test ${DIST_DIR}/doc
	@@cd ${DIST_DIR}; tar -czf ${TAR_NAME} --exclude=${TAR_NAME} --exclude=${ZIP_NAME} *
	@@cd ${DIST_DIR}; zip -rqn ".jar" ${ZIP_NAME} . -x ${TAR_NAME} -x ${ZIP_NAME}
	@@echo "Wrench distribution build complete."

