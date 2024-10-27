import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite'; 


describe('BodySectionWithMarginBottom Tests', () => {
    beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    
    afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
  
    test('Renders correctly children and props', () => {
        const { getAllByRole } = render(
            <BodySectionWithMarginBottom title="Margin Bottom title">
              <p>JBA Margin to the bottom</p>
            </BodySectionWithMarginBottom>
        )

        const headerElement = getAllByRole('heading', { level: 2 })
        const paragraphElement = getAllByRole('paragraph')

        expect(headerElement.length).toEqual(1);
        expect(paragraphElement.length).toEqual(1);
        expect(headerElement[0]).toHaveTextContent("Margin Bottom title");
        expect(paragraphElement[0]).toHaveTextContent("JBA Margin to the bottom");
    })
})
