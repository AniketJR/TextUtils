import React from 'react'


export default function Footer(props) {
  return (
    <div>
      <p className={`text-center bg-${props.mode==='dark'?'light': 'dark'} text-${props.mode} mb-0 py-2`}><b>TextUtils | Made with ❤️ by <a href='https://www.linkedin.com/in/aniket-ravikantiwar/' target="_blank">Aniket</a></b></p>
    </div>
  )
}
