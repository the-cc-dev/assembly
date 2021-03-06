import React from 'react';
import iconsList from '../../_tmp_assembly/icons.json';

const fontSizes = [
  'txt-h1',
  'txt-h2',
  'txt-h3',
  'txt-xl',
  'txt-l',
  'txt-m',
  'txt-s',
  'txt-xs'
];

const iconSizes = ['icon', 'icon icon--s', 'icon icon--l'];

const wrapperClass = 'icon-inliner';

const getIconEl = icon => {
  return (
    <div key={icon} className="relative mb24 pb12 border-b border--gray-faint">
      <div className="mb12">
        <button className="btn round-full">
          <div className={wrapperClass}>
            <svg className="icon">
              <use xlinkHref={`#icon-${icon}`} />
            </svg>
          </div>
          Button label
        </button>
      </div>

      {fontSizes.map(f =>
        iconSizes.map(c => (
          <div className={`mb12 ${f}`}>
            <div
              className={
                f.includes('h') ? (
                  wrapperClass + ' icon-inliner--heading'
                ) : (
                  wrapperClass
                )
              }
            >
              <svg className={c}>
                <use xlinkHref={`#icon-${icon}`} />
              </svg>
            </div>
            <span>Curabitur blandit tempus porttitor.</span>
            <div
              className={
                f.includes('h') ? (
                  wrapperClass + ' icon-inliner--heading'
                ) : (
                  wrapperClass
                )
              }
            >
              <svg className={c}>
                <use xlinkHref={`#icon-${icon}`} />
              </svg>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export class Icons extends React.Component {
  render() {
    const { icons } = iconsList;
    // Get a random icon from all icons. Because why not.
    const iconEls = getIconEl(icons[Math.floor(Math.random() * icons.length)]);

    return (
      <div>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Icons
        </h2>

        {iconEls}
      </div>
    );
  }
}
