import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BodySection from './BodySection';


describe('BodySection Rendering Tests', () => {
    test('Component renders children and elements', () => {
        const { getAllByRole } = render(
            <BodySection title="test title">
              <p>test children node</p>
            </BodySection>
        )
        const headerElement = getAllByRole('heading', { level: 2 })
        const paragraphElement = getAllByRole('paragraph')
        expect(headerElement.length).toEqual(1);
        expect(paragraphElement.length).toEqual(1);
        expect(headerElement[0]).toHaveTextContent("test title");
        expect(paragraphElement[0]).toHaveTextContent("test children node");
    })
});
