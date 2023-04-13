import './globals.css'

export const metadata = {
  title: 'KKANBU - ninja?',
  description: 'KKANBU 1 han da',
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: any
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
      <h2 style={{fontSize:50, marginBottom:10, textAlign: 'center',color:'white'}}>깐부 Ha<span style={{fontSize: 38,letterSpacing: '-0.14em'}}>nin</span>{' '}ja</h2>
      <div style={{padding: '0 0 10px', textAlign: 'center'}}>
        <a className="topButton"  style={{    backgroundColor: '#b34afb',
        }} target='_blank' href="https://www.twitch.tv/ham_90">twitch</a>
        <a className="topButton" style={{    backgroundColor: '#fb4ab0',
        }} target='_blank' href="https://tgd.kr/s/ham_90/">햄게더</a>
        <a className="topButton"  style={{    backgroundColor: '#626262',
        }} target='_blank' href="https://docs.google.com/spreadsheets/d/1mQ-QUtPBI_T4sTcI1SBgl1QOdtiq_ONgxqzO6FyCpaY/edit#gid=2071372347">깐부시트</a>
        <a className="topButton" style={{    backgroundColor: '#621462'}} href="/">깐부build</a>
        <a className="topButton"  style={{    backgroundColor: '#3c0c9b'}} href="/request">{`"해줘"판`}</a>
      </div>
        {children}
      </body>
    </html>
  )
}
