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
      <div className='background'></div>
        <div style={{position:'sticky'}}>
      <h2 style={{fontSize:50, marginBottom:10, textAlign: 'center',color:'#ff9cea'}}>깐부 Ha<span style={{fontSize: 38,letterSpacing: '-0.14em'}}>nin</span>{' '}ja</h2>
      <div style={{padding: '0 0 10px', textAlign: 'center'}}>
        <a className="topButton"  style={{    backgroundColor: '#b34afb',
        }} target='_blank' href="https://www.twitch.tv/ham_90">twitch</a>
        <a className="topButton" style={{    backgroundColor: '#fb4ab0',
        }} target='_blank' href="https://tgd.kr/s/ham_90/">햄게더</a>
        <a className="topButton new"  style={{    backgroundColor: '#32bf34',
        }} target='_blank' href="https://chzzk.naver.com/888bdc1e2fbe68322574cbe883b34ee4">치지직</a>
        <a className="topButton new"  style={{    backgroundColor: '#eea3aa',
        }} target='_blank' href="https://cafe.naver.com/peachhipsfamily">복방단</a>
        <a className="topButton"  style={{    backgroundColor: '#626262',
        }} target='_blank' href="https://docs.google.com/spreadsheets/d/1mQ-QUtPBI_T4sTcI1SBgl1QOdtiq_ONgxqzO6FyCpaY/edit#gid=2071372347">깐부시트</a>
        <span className="rankLink">
          <a className="topButton" style={{    backgroundColor: '#621462'}} href="/">깐부Rank</a>
          <div className="topButton hidden">
            <a className="topButton" style={{ backgroundColor: '#621462'}} href="/rank/1">1회</a>
            <a className="topButton" style={{ backgroundColor: '#621462'}} href="/rank/2">2회</a>
          </div>
        </span>
        <a className="topButton"  style={{    backgroundColor: '#3c0c9b'}} href="/request">{`"해줘"판`}</a>
      </div>
        {children}
        </div>
      </body>
    </html>
  )
}
