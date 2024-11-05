import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function NewPage(props) {
  return (
    <section className={cn(styles.productCategorySection, props.className, 'new-page')}>
      {/* Main product categories navigation area */}

      <div className={styles.categoryContainer}>
        <nav className={styles.menuWrapper}>
          {/* Product category menu list */}

          <div className={styles.mobileCategory}>
            <a className={styles.categoryLink}>Mobile</a>
            <div className={styles.divider} />
          </div>

          <a className={styles.categoryLink1}>{`TV & Audio`}</a>
          <a className={styles.categoryLink2}>Home Appliances</a>
          <a className={styles.categoryLink2}>Computing</a>
        </nav>

        <img className={styles.categoryImg} src={'/assets/c1a14e719b0ca50a771adef1cf616fc8.png'} alt="alt text" />
      </div>
    </section>
  );
}

NewPage.propTypes = {
  className: PropTypes.string
};

export default NewPage;
