@echo off
echo Installing Yukon Lab project dependencies...

echo Cleaning node_modules and package-lock.json...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo Installing dependencies...
call npm install

echo Creating necessary directories...
if not exist public\images mkdir public\images

echo Creating placeholder image files...
echo This is a placeholder for a DNA pattern image file. > public\images\dna-pattern.txt

echo.
echo Setup complete!
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo Then visit http://localhost:3000 in your browser
pause 