import './header.component.css'
export const    Header = (prompts) => {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            removeActiveClass();
            card.classList.add("active");
            card.classList.remove("round");
        });
    });

    function removeActiveClass() {
        cards.forEach((card) => {
            card.classList.remove("active");
            card.classList.add("round");
        });
    }

    return (

        <div className="page__container">
            <div className="container">
                <div className="cards">
                    <div className="card c1 active">
                        <div className="card__head">
                            <h3>Me</h3>
                        </div>
                        <div className="card__data">
                            <h2>Vaisakh M A</h2>
                            <h4>Developer</h4>
                        </div>
                    </div>
                    <div className="card c2 round">
                        <div className="card__head">
                            <h3>Mountain</h3>
                        </div>
                        <div className="card__data">
                            <h2>Mountain</h2>
                            <h4>View of a foggy mountain</h4>
                        </div>
                    </div>
                    <div className="card c3 round">
                        <div className="card__head">
                            <h3>Flower</h3>
                        </div>
                        <div className="card__data">
                            <h2>Flower</h2>
                            <h4>A Pink flower</h4>
                        </div>
                    </div>
                    <div className="card c4">
                        <div className="card__head">
                            <h3>Sky</h3>
                        </div>
                        <div className="card__data">
                            <h2>Sky</h2>
                            <h4>Mountain covered in clouds</h4>
                        </div>
                    </div>
                    <div className="card c5">
                        <div className="card__head">
                            <h3>Design</h3>
                        </div>
                        <div className="card__data">
                            <h2>Design</h2>
                            <h4>Designing a prototype</h4>
                        </div>
                    </div>
                    <div className="card c6">
                        <div className="card__head">
                            <h3>Snow</h3>
                        </div>
                        <div className="card__data">
                            <h2>Snow</h2>
                            <h4>House covered by snowe</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}