useful commands

to build the project
```bash
ng build --output-hashing none
```
to combine all script files into one using `gzip`
```bash
cat ./{runtime,polyfills,scripts,main}.js | gzip > elements.js.gz
```


