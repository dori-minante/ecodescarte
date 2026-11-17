@REM Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.
@echo off
setlocal
set "MAVEN_PROJECTBASEDIR=%~dp0"
set "MAVEN_VERSION=3.9.9"
set "MAVEN_BASEDIR=%MAVEN_PROJECTBASEDIR%.mvn\apache-maven-%MAVEN_VERSION%"
if exist "%MAVEN_BASEDIR%\bin\mvn.cmd" goto runMaven
echo Baixando Maven Wrapper %MAVEN_VERSION%...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Invoke-WebRequest -UseBasicParsing 'https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/%MAVEN_VERSION%/apache-maven-%MAVEN_VERSION%-bin.zip' -OutFile '%MAVEN_PROJECTBASEDIR%.mvn\maven.zip'; Expand-Archive -Force '%MAVEN_PROJECTBASEDIR%.mvn\maven.zip' '%MAVEN_PROJECTBASEDIR%.mvn'; Remove-Item '%MAVEN_PROJECTBASEDIR%.mvn\maven.zip'"
if errorlevel 1 exit /b 1
:runMaven
call "%MAVEN_BASEDIR%\bin\mvn.cmd" %*
endlocal
