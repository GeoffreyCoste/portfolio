import React from 'react';
import IconsBar from '../../IconsBar';

const TabsContent = ({ items, active }) => {
  return (
    <>
      {items.map((item, index) => {
        const { id, title, description, technologies } = item;

        return (
          <div
            key={`${index}-17467fd0-ffdc-460a-ac7f-8108bfff2808`}
            className={`tabs__body__content${active === index ? ' show' : ''}`}
          >
            <div className="wrapper wrapper-1">
              <div className="wrapper__child wrapper-col index">
                <p className="index__text">{`0${parseInt(id)}`}</p>
              </div>
              <div className="wrapper__child wrapper-col text">
                <h4 className="text__title">{title}</h4>
                <p className="text__paragraph">{description.intro}</p>
                <ul className="text__list">
                  {description.list.map((el, index) => (
                    <li
                      key={`${index}-442fef32-a4c9-46bd-8cbb-2cadc5dfd365`}
                      className="text__list__item"
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="wrapper wrapper-2 wrapper-col">
              <ul className="tech__list">
                {technologies?.map((item, index) => {
                  const { title, icons, texts } = item;

                  return (
                    <li
                      key={`${index}-442fef32-a4c9-46bd-8cbb-2cadc5dfd365`}
                      className="tech__list__item item"
                    >
                      <p className="item__title">{title}</p>
                      {icons ? (
                        <IconsBar icons={icons} />
                      ) : texts ? (
                        <ul className="item__text text">
                          {texts.map((text, index) => (
                            <li
                              key={`${index}-fa990f0c-7819-462d-9c5e-457e768218a3`}
                              className="text-white pr-1"
                            >
                              {text}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ''
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TabsContent;
