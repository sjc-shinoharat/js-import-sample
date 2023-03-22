import { data, Foo as Foo2 } from "./foo.js"

console.log('--- main ---------------------');

document.getElementById('btn').addEventListener('click', _ => {
  Foo2();
  console.log(data);
  alert("クリックされました！ " + data);
});

export default function hoge() { console.log('hoge') };
