var arr = [
  {
    name:"truong1",
    diem: 5
  },
  {
    name:"truong2",
    diem: 5
  },
  {
    name:"truong3",
    diem: 6
  },
  {
    name:"truong4",
    diem: 7
  },
  {
    name:"truong5",
    diem: 8
  },
];
for(i = 0 ;i<100;i++)
{
  var diem = prompt("Nhap diem "+parseInt(i+1));
  console.log(diem);
  arr.push(diem);
}
console.log(arr);
