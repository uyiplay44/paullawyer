import './Focus.css'

export const Focus = () => {
  return (
    <div className='Focus_main'>
      <div className='Focus_title'>
        <h1>What We Focus on</h1>
      </div>
      <div className='Focus_contain'>
        <div className='Focus_phase'>
          <div className='Focus_section'>
            <h2>Civil Litigation</h2>
            <p>Civil litigation attorneys handle cases between individuals, organizations, or businesses that are involved in disputes seeking monetary compensation or specific performance. This can include personal injury claims, contract disputes, property disputes, and more.</p>
          </div>
          <div className='Focus_section_1'>
            <h2>Criminal Law</h2>
            <p>Lawyers specializing in criminal law handle cases related to crimes, both minor and serious offenses. They may work as defense attorneys representing individuals accused of crimes or as prosecutors representing the government.</p>
          </div>
        </div>

        <div className='Focus_phase_1'>
          <div className='Focus_section_2'>
            <h2>Corporate Law</h2>
            <p>This involves working with businesses on matters such as company formation, contracts, mergers and acquisitions, intellectual property, corporate governance, and compliance.</p>
          </div>
          <div className='Focus_section_3'>
            <h2>CCryptocurrency and Blockchain Law</h2>
            <p>Lawyers specializing in this area navigate the legal complexities surrounding cryptocurrencies, blockchain technology, and decentralized finance (DeFi). They advise clients on regulatory compliance, initial coin offerings (ICOs), token sales, smart contracts, and cryptocurrency exchanges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
