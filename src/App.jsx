import { useState } from 'react'
import diaryData from './diaryData'
import DiaryCard from './components/DiaryCard'
import Menu from './components/Menu'
import './styles.css'
export default function App() {
  /* Challenge 

İki DiaryCard elementi şu anda aşağıdaki verilerle sabit olarak kodlanmıştır. Göreviniz, diaryData.js dosyasındaki 14 günlük verinin tamamı için otomatik olarak DiaryCard elementleri oluşturmak üzere döngünün gücünü kullanmaktır. 

    1. Sabit kodlanmış DiaryCard elementlerinin her ikisi de silinmeli ve yerine toplam 14 
       otomatik olarak oluşturulan elementler eklenmeli. 
    
    2. İlk iki kart orijinal kodlanmış kartlarla aynı görünmeli ve geri kalanı 
       kartlar benzer görünmelidir. 
        
    3. Kodu kısa ve anlaşılır hale getiriniz. 
*/
diaryData[1].emotions =[
  { icon: '😇', text: 'Gururlu' },
  { icon: '🥰', text: ' Takdir Edildi' },
  { icon: '😃', text: 'Neşeli' },
  { icon: '️🥳', text: ' Kutlamalar' },
]

diaryData[1].activities = [
  { icon: '🏆', text: 'Kişisel Zaferi' },
  { icon: '️️️💪', text: 'Kişisel Gelişim' },
  { icon: '️🍛', text: 'İyi Yemek' },
  { icon: '️🛌', text: ' Güzel Uyku' },
  { icon: '️👪', text: 'Aile Zamanı' },
] 

diaryData[1].note = `Son üç aydır üzerinde çalıştığım büyük iş projemi nihayet bitirdim ve ekibimin bir üyesi olarak kendimi geliştirdiğimi hissediyorum.`

  return (
    <div>
      <Menu skip={false} />
      <main className='main-container'>
        <div className='sub-header'>
          <h3>Nisan Raporu</h3>
        </div>

        {diaryData.map((data) => (
        <DiaryCard
          key={data.id}
          date={data.date}
          rating={data.rating}
          emotions={data.emotions}
          activities={data.activities}
          note={data.note}
        />
          
         
        ))}

      </main>
    </div>
  )
}

