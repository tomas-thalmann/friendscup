set /P Eingabe=Foundation updaten? (j/n): 
if "%Eingabe%"=="j" goto :update
goto :end

:update
bower update

:end