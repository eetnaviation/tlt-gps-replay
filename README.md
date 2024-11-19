# tlt-gps-replay
Replay TLT gps.txt files. Use something like [tlt-gps-downloader](https://github.com/eetnaviation/tlt-gps-downloader) to download gps files.

## Usage
Install express module:
```
npm i express
```
Run app
```
node server.js
```
Go to web UI
```
http://localhost:3000/
```

## Supplying files
It needs gps files in this name format: gps-year-month-day-HOUR_MINUTE_SECOND.txt
Put them in a folder named gps/