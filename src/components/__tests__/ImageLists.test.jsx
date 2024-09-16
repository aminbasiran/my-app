import ImageLists from "../ImageLists";
import { render, screen } from "@testing-library/react";
describe("ImageLists", () => {
    test("should render an unordered list", () => {
        const imageLists = [
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ]

        render(<ImageLists imageLists={imageLists} />);
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
    });


    test("should render empty dom Element when imageLists is empty", () => {
        const imageLists = []
        const { container } = render(<ImageLists imageLists={imageLists} />);
        expect(container).toBeEmptyDOMElement();
    });

    test("should render image elements", () => {
        const imageLists = [
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',            
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ]
        render(<ImageLists imageLists={imageLists} />);
        const images = screen.getAllByRole("img");
        images.forEach((image, index) => {
            expect(image).toHaveAttribute("src", imageLists[index]);
        });
    });

    


})
