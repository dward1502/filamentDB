import React, {Fragment} from 'react'

import styles from './filament.module.scss'

const filamentFilters = () => {
  return (
    <div className={styles.main}>
      <section className={styles.filters}>
        <h1>Basic Filters</h1>
        <h3>Filter by Manufacturer</h3>
        <h3>Filament Type</h3>
        <h3>Color / Appearance</h3>
        <h3>Location</h3>
        <h3>Size</h3>
      </section>
      <section className={styles.filaments}>

      </section>
      <aside className={styles.addSpace}>

      </aside>
    </div>
  )
}

export default filamentFilters