export default function About() {

    const aboutUs = "This is the body of the page";

    const object = {
        id: 1,
        body: aboutUs
    }

    return (
        <>
            <h1>About us</h1>
            <div>
                {object.body}
            </div>
        </>
    );
}