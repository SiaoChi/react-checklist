export default function Stats({items}){
  if(!items.length) return <p className='stats'>
    <em>開始打包你的待辦清單</em>
  </p>
  const itemNum = items.length;
  const packedItemNum = items.filter((item)=> item.packed).length;
  const percentage = Math.round((packedItemNum / itemNum)*100) 
  
  return (
  <footer className='stats'>
    <em>
      {percentage === 100
      ? '你已經打包完成！'
      : `► 你還需要打包 ${itemNum} 項待辦清單, 
      你已經打包 ${packedItemNum} (${percentage}%)`}
    </em>
  </footer>
  );
}