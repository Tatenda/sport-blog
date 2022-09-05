/* eslint-disable @next/next/no-img-element */
import arrow from "../public/svg/arrow.svg";
const Pager = () => {
    return <>
        <div className="col-12 pager">
            <div className="pager__container">
                <div className="pager__arrow pager__arrow--left pager__arrow--disabled">
                    <img src="/svg/arrow.svg" alt="arrow" />
                </div>
                <div className="pager__page-number pager__page-number--selected">1</div>
                <div className="pager__page-number pager__page-number--disabled">2</div>
                <div className="pager__page-number">3</div>
                <div className="pager__page-number">4</div>
                <div className="pager__page-number">5</div>
                <div className="pager__page-number">6</div>
                <div className="pager__page-number">7</div>
                <div className="pager__arrow">
                    <img src="/svg/arrow.svg" alt="arrow" />
                </div>
            </div>
        </div>
    </>;
}

export default Pager;
