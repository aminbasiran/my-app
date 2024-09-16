import { render, screen } from "@testing-library/react";
import Article from "../Article"
import userEvent from "@testing-library/user-event";


const LIMIT = 200
const shortText = "lorem ipsum"
const longText = "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere. lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere."
const truncatedText = longText.substring(0, LIMIT)


describe('Article', () => {

    test("should render short text", () => {
        render(<Article text={shortText} />)
        const article = screen.getByText(shortText)
        expect(article).toBeInTheDocument()
    })

    test("should render long text when expanded", async () => {
        const user = userEvent.setup();

        render(<Article text={longText} />)

        const article = screen.getByText(`${truncatedText}...`)
        expect(article).toBeInTheDocument()

        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent("Read More")

        await user.click(button)
        expect(article).toHaveTextContent(longText)
        expect(button).toHaveTextContent("Show Less")
    })




})