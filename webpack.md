
在 create-react-app 中，可通过 npm run build -- --stats，将 Stats 信息写入文件 build/bundle-stats.json 中。

## chunk
cat build/bundle-stats.json | jq -C ".chunks | .[] | { initial, entry, files, hash, id, children, names, sizes }" | less

``` json
{
  "initial": true,
  "entry": true,
  "files": [
    "static/css/main.12c8db8d.css",
    "static/js/main.e21a723d.js"
  ],
  "hash": "bf077dea0f35b569b43f",
  "id": 179,
  "children": [
    787
  ],
  "names": [
    "main"
  ],
  "sizes": {
    "javascript": 7001674,
    "css/mini-extract": 376,
    "runtime": 6437
  }
}
{
  "initial": false,
  "entry": false,
  "files": [
    "static/js/787.60b54fd6.chunk.js"
  ],
  "hash": "c4096b247c53dae59a39",
  "id": 787,
  "children": [],
  "names": [],
  "sizes": {
    "javascript": 6559
  }
}
```
### jq命令 
https://xunlianying.feishu.cn/wiki/wikcnQ66DQBn6gVlyOecUA060Pe

## module
cat build/bundle-stats.json | jq -C ".modules | .[] | { type, moduleType, size, name, id, identifier, chunks, depth }" | less


## 网站 [http://webpack.github.io/analyse/](http://webpack.github.io/analyse/)
## webpack-bundle-analyzer
webpack-bundle-analyzer build/bundle-stats.json