SRC_DIR = src
BUILD_DIR = build

PREFIX = .
DIST_DIR = ${PREFIX}/dist

BROWSER_FILES = ${SRC_DIR}/top.txt\
	${SRC_DIR}/String.js\
	${SRC_DIR}/String.generic.js\
	${SRC_DIR}/Array.moz.js\
	${SRC_DIR}/Array.js\
	${SRC_DIR}/Array.15.js\
	${SRC_DIR}/Array.generic.js\
	${SRC_DIR}/Math.js

SM_FILES = ${SRC_DIR}/top.txt\
	${SRC_DIR}/String.js\
	${SRC_DIR}/String.18.js\
	${SRC_DIR}/String.generic.js\
	${SRC_DIR}/Array.js\
	${SRC_DIR}/Array.18.js\
	${SRC_DIR}/Array.generic.js\
	${SRC_DIR}/Getters.js\
	${SRC_DIR}/Math.js

WRENCH15 = ${DIST_DIR}/wrench15.js
WRENCHSM = ${DIST_DIR}/wrench.sm.js
WRENCH15_MIN = ${DIST_DIR}/wrench15.min.js

WRENCH_VER = `cat version.txt`
VER = sed s/@VERSION/${WRENCH_VER}/
BUILDMODE_15 = sed s/@BUILDTYPE/Browser/
BUILDMODE_SM = sed s/@BUILDTYPE/Server-side/

MINJAR = java -jar ${BUILD_DIR}/yuicompressor-2.4.2.jar

all: wrench min
	@@echo "Wrench build complete."

${DIST_DIR}:
	@@mkdir -p ${DIST_DIR}

wrench: ${DIST_DIR} ${WRENCH15} ${WRENCHSM}

${WRENCHSM}: ${SM_FILES}
	@@echo "Building" ${WRENCHSM}
	
	@@mkdir -p ${DIST_DIR}
	@@cat ${SM_FILES} | \
		${BUILDMODE_SM} | \
		${VER} > ${WRENCHSM};
	
	@@echo ${JQ} "Built"
	@@echo

${WRENCH15}: ${BROWSER_FILES}
	@@echo "Building" ${WRENCH15}
	
	@@mkdir -p ${DIST_DIR}
	@@cat ${BROWSER_FILES} | \
		${BUILDMODE_15} | \
		${VER} > ${WRENCH15};
	
	@@echo ${JQ} "Built"
	@@echo

	
min: ${WRENCH15_MIN}

${WRENCH15_MIN}: ${WRENCH15}
	@@echo "Building" ${WRENCH15_MIN}

	@@echo " - Compressing using YUI Compressor"
	@@${MINJAR} ${WRENCH15} > ${WRENCH15_MIN}

	@@echo ${WRENCH15_MIN} "Built"
	@@echo

clean:
	@@echo "Removing Distribution directory:" ${DIST_DIR}
	@@rm -rf ${DIST_DIR}

