import React from 'react';
import './Values.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';

const Values = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* Left Side */}
        <div className='v-left'>
          <div className='image-container'>
            <img src='./value.png' alt='' />
          </div>
        </div>
        {/* Right Side */}
        <div className='flexColStart v-right'>
          <span className='orangeText'>Motto</span>
          <span className='primaryText'>
            Don't wait and buy real estate <br />
            Buy real estate and wait
          </span>
          <span className='secondaryText'>
            Residential real estate is an investment for every budget
          </span>

          <Accordion
            className='accordion'
            allowMulipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className='accordionItem' key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                      <div className='flexCenter'>{item.icon}</div>
                      <span className='primaryText'>{item.heading}</span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
