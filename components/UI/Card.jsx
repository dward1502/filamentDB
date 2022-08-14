import React from 'react'
import Image from 'next/image';

import styles from './ui.module.scss';

const Card = () => {
  return (
    <div className={styles.card_filament}>
        <div className={styles.cardImg}>
            <Image
                src={'/filamentSpool.jpg'}
                layout='fill'
            />
        </div>
        <p>Name of Product</p>        
    </div>
  )
}

export default Card