SRC_DIR = src
BUILD_DIR = build

PREFIX = .
DIST_DIR = ${PREFIX}/dist

FILES_TOP = ${SRC_DIR}/top.txt\
	${SRC_DIR}/Object.js\
	${SRC_DIR}/Number.js\
	${SRC_DIR}/Math.js\
	${SRC_DIR}/String.js\
	${SRC_DIR}/String.generic.js

FILES15 = ${FILES_TOP}\
	${SRC_DIR}/Array16.js\
	${SRC_DIR}/Array18.js\
	${SRC_DIR}/Array.js\
	${SRC_DIR}/Array.old.js

FILES17 = ${FILES_TOP}\
	${SRC_DIR}/Array18.js\
	${SRC_DIR}/Array.js\
	${SRC_DIR}/Array.old.js\
	${SRC_DIR}/Array.iterator.js\
	${SRC_DIR}/Getters.js

FILES18 = ${FILES_TOP}\
	${SRC_DIR}/Array.js\
	${SRC_DIR}/Array.new.js\
	${SRC_DIR}/Array.iterator.js\
	${SRC_DIR}/Getters.js

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

all: wrench min
	@@echo "Wrench build complete."

wrench: ${WRENCH15} ${WRENCH17} ${WRENCH18}
min: ${WRENCH15_MIN}

${DIST_DIR}:
	@@mkdir -p ${DIST_DIR}

${WRENCH15}: ${DIST_DIR} ${FILES15}
	@@echo -n "Building" ${WRENCH15}
	@@cat ${FILES15} | ${VER15} | ${VER} > ${WRENCH15};
	@@echo " - Done"
	@@echo

${WRENCH17}: ${DIST_DIR} ${FILES17}
	@@echo -n "Building" ${WRENCH17}
	@@cat ${FILES17} | ${VER17} | ${VER} > ${WRENCH17};
	@@echo " - Done"
	@@echo

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

