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

const iconClassTxt = 'icon mr3 icon--in-txt';
const iconClassH = 'icon mr3 icon--in-h';

const getIconEl = icon => {
  return (
    <div key={icon} className="relative mb24 pb12 border-b border--gray-faint">
      <div className="mb12">
        <button className="btn round-full">
          <svg className={iconClassTxt}>
            <use xlinkHref={`#icon-${icon}`} />
          </svg>
          Button label
        </button>
      </div>

      {fontSizes.map(f => (
        <div className={`mb12 ${f}`}>
          <svg className={f.includes('h') ? iconClassH : iconClassTxt}>
            <use xlinkHref={`#icon-${icon}`} />
          </svg>
          <span>Curabitur blandit tempus porttitor.</span>
          <svg className={f.includes('h') ? iconClassH : iconClassTxt}>
            <use xlinkHref={`#icon-${icon}`} />
          </svg>
        </div>
      ))}
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
        <h2 className="border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Icons
        </h2>

        {iconEls}
      </div>
    );
  }
}
