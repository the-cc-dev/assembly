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

const iconClasses = 'icon align-middle inline-block mr3';

const getIconEl = icon => {
  return (
    <div key={icon} className="relative mb24 pb12 border-b border--gray-faint">
      <div className="mb12">
        <button className="btn round-full">
          <svg className={iconClasses}>
            <use xlinkHref={`#icon-${icon}`} />
          </svg>
          Button label
        </button>
      </div>

      {fontSizes.map(f => (
        <div key={f} className={`mb12 ${f}`}>
          <svg className={iconClasses}>
            <use xlinkHref={`#icon-${icon}`} />
          </svg>
          <span>Curabitur blandit tempus porttitor.</span>
          <svg className={iconClasses}>
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
