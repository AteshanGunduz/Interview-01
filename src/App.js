import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {
  return(
    <div>
      <div>taxi: {nestedObjected.taxi}</div>

      <div className='flex '> 
      <div>food:</div>
      <div className='flex flex-col  justify-between mt-10'>
       <div>sushi: {nestedObjected.food.sushi}</div> 
       <div className='flex'>
       <div >apple:</div>
               <div className='flex flex-col  justify-between mt-10'>
                <div>Honeycrisp: {nestedObjected.food.apple.Honeycrisp}</div>
                        <div>Fuji: {nestedObjected.food.apple.Fuji}</div>
                </div></div>
                </div>
                </div>
  </div>
   
  )
  
}

export default App
