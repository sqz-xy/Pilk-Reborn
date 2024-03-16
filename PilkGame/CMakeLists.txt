cmake_minimum_required(VERSION 3.0.0)
project(pilk-game VERSION 0.1.0)
#set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} /SUBSYSTEM:WINDOWS /ENTRY:mainCRTStartup")

get_filename_component(PARENT_DIR ../ ABSOLUTE)
include_directories(${PARENT_DIR}/src)

link_directories(${PARENT_DIR}/Pilk2D/build/Debug)
link_directories(${PARENT_DIR}/Pilk2D/libs/glfw)

include_directories(include)

include_directories(${PARENT_DIR}/Pilk2D/libs/glad)
include_directories(${PARENT_DIR}/Pilk2D/libs/KHR)
include_directories(${PARENT_DIR}/Pilk2D/libs/imgui)
include_directories(${PARENT_DIR}/Pilk2D/libs/glfw)
include_directories(${PARENT_DIR}/Pilk2D/libs/stb)
include_directories(${PARENT_DIR}/Pilk2D/libs/irrKlang)
include_directories(${PARENT_DIR}/Pilk2D/libs/glm)
include_directories(${PARENT_DIR}/Pilk2D/include)

file(GLOB_RECURSE SOURCES ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp)
add_executable(pilk-game ${SOURCES})

find_package(OpenGL REQUIRED)
target_link_libraries(pilk-game PRIVATE ${OPENGL_gl_LIBRARY})
target_link_libraries(pilk-game PRIVATE pilk-2d)
target_link_libraries(pilk-game PRIVATE glfw3)

file(COPY resources DESTINATION /)
