import React from 'react';
import '../index.css';

const tradeData = [
  { price: '$105.5', from: 'AAVE', imgSrc: '/assets/trading/aave.svg' },
  { price: '$0.00001748.5', from: 'DOGE', imgSrc: '/assets/trading/doge.svg' },
  { price: '$23.84', from: 'HBAR', imgSrc: '/assets/trading/hbar.svg' },
  { price: '$0.3456', from: 'LUNA', imgSrc: '/assets/trading/luna.svg' },
  { price: '$5.795', from: 'ATOM', imgSrc: '/assets/trading/atom.svg' },
  { price: '$6.175', from: 'BTC', imgSrc: '/assets/trading/btc.svg' },
  { price: '$1.425', from: 'ETH', imgSrc: '/assets/trading/eth.svg' },
  { price: '$0.056', from: 'KSM', imgSrc: '/assets/trading/ksm.svg' },
  { price: '$61.67', from: 'SHIBA', imgSrc: '/assets/trading/shiba.svg' },
  { price: '$8.56', from: 'UNI', imgSrc: '/assets/trading/uni.svg' },
  { price: '$0.567', from: 'ADA', imgSrc: '/assets/trading/ada.svg' },
  { price: '$6.658', from: 'AVAX', imgSrc: '/assets/trading/avax.svg' },
];

const Tradebar = () => {
  const doubledTradeData = [...tradeData, ...tradeData]; // Duplicate the trade data

  return (
    <div className='tradebar_content'>
      <p>Trading</p>
      <div className='tradebar_scroll-wrapper'>
        {doubledTradeData.map((trade, index) => (
          <div className='tradebar_scroll' key={index}>
            <img src={trade.imgSrc} alt="img" />
            <div className='tradebar_item'>
              <span className='tradebar_price'>{trade.price}</span>
              <span className='tradebar_from'>{trade.from}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tradebar;
