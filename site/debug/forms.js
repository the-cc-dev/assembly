import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb20'>
          Forms
        </h1>

        <div>
          <fieldset>
            <legend className='txt-bold'>Animals</legend>
            <div className='mt5'>
              <label className='radio-container'>
                <input name='animal' value='cow' type='radio' />
                <div className='radio' />
                cow
              </label>
            </div>
            <div className='mt5'>
              <label className='radio-container'>
                <input name='animal' value='horse' type='radio' />
                <div className='radio' />
                horse
              </label>
            </div>
            <div className='mt5'>
              <label className='radio-container'>
                <input name='animal' value='pig' type='radio' />
                <div className='radio' />
                pig
              </label>
            </div>
          </fieldset>
          <fieldset className='mt30'>
            <legend className='txt-bold'>Animals</legend>
            <div className='mt5'>
              <label className='checkbox-container'>
                <input type='checkbox' value='cow' />
                <div className='checkbox'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                cow
              </label>
            </div>
            <div className='mt5'>
              <label className='checkbox-container'>
                <input type='checkbox' value='horse' />
                <div className='checkbox'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                horse
              </label>
            </div>
            <div className='mt5'>
              <label className='checkbox-container'>
                <input type='checkbox' value='pig' />
                <div className='checkbox'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                pig
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

export { Forms };