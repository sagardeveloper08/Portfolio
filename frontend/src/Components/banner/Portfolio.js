import React, { Fragment } from "react";


const Portfolio = () => {
    return (
        <Fragment>
            <section id="works" className="portfolio-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h3>Portfolio.</h3>
                        <p>Happy Clients and work !.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="shorting-menu">
                                <button className="filter" data-filter="all">All</button>
                                <button className="filter" data-filter=".category-a">Web Design</button>
                                <button className="filter" data-filter=".category-b">Development</button>
                                <button className="filter" data-filter=".category-c">Branding</button>
                            </div>
                        </div>
                    </div>
                    <div className="shorting">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mix category-a">
                                <div className="single-portfolio">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFifnBg0F6GeQ/company-logo_200_200/0/1625298726794?e=2159024400&v=beta&t=BmOJyYjiHXs37Lj9K7zX97K6upmucIjSicYhuolzw7I" alt="portfolio" />
                                    <div className="content">
                                        <h3>Web Design</h3>
                                        <a href="https://image.wedmegood.com/resized/600X/uploads/city_bg_image/1/delhi_bg.jpeg" className="zoom-portfolio"><i className="fa fa-search-plus" /></a>
                                        <a href="https://www.wedmegood.com/" target="_blank" className="link-btn"><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mix category-b">
                                <div className="single-portfolio">
                                    <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/e0/4b/a0/e04ba07a-2a52-6e70-9ecf-e99573a29fb8/source/512x512bb.jpg" alt="portfolio" />
                                    <div className="content">
                                        <h3>Web Design</h3>
                                        <a href="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/e0/4b/a0/e04ba07a-2a52-6e70-9ecf-e99573a29fb8/source/512x512bb.jpg" className="zoom-portfolio"><i className="fa fa-search-plus" /></a>
                                        <a href="https://myarchitectureinteriorleads.in/" target="_blank" className="link-btn"><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mix category-c">
                                <div className="single-portfolio">
                                    <img src="https://leads.interiornearme.com/wp-content/uploads/2020/05/Open-House-Evening-Affair-300x300.png" alt="portfolio" />
                                    <div className="content">
                                        <h3>Web Design</h3>
                                        <a href="https://leads.interiornearme.com/wp-content/uploads/2020/05/Open-House-Evening-Affair-300x300.png" className="zoom-portfolio"><i className="fa fa-search-plus" /></a>
                                        <a href="https://bookmyinteriorlead.com/" target="_blank" className="link-btn" ><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mix category-a">
                                <div className="single-portfolio">
                                    <img src="https://www.cryptocoinzone.com/media/2020/09/Crypto.com-App-Review-Feature-1024x735.png" alt="portfolio" />
                                    <div className="content">
                                        <h3>Web Design</h3>
                                        <a href="https://leads.interiornearme.com/wp-content/uploads/2020/05/Open-House-Evening-Affair-300x300.png" className="zoom-portfolio"><i className="fa fa-search-plus" /></a>
                                        <a href="https://crypto.com/" className="link-btn" target="_blank"><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mix category-b">
                                <div className="single-portfolio">
                                    <img src="https://www.duocircle.com/wp-content/uploads/2021/05/mailgun-logo.png" alt="portfolio" />
                                    <div className="content">
                                        <h3>Web Design</h3>
                                        <a href="https://i.ytimg.com/vi/O3B52UzIXPc/maxresdefault.jpg" className="zoom-portfolio"><i className="fa fa-search-plus" /></a>
                                        <a href="https://www.sendinblue.com/" className="link-btn" target="_blank"><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mix category-c">
                                <div className="single-portfolio">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABVlBMVEX///9ISErCHS4AAABMTE5YWFr8//9PT1FKSkz6//9TU1VERETjHihFRUfHHy5ycnJjY2Pz6OmzAB3SHirXHSrtGyb2//+ysrLu7u6rGSZdXV/Z2dnHx8k5OTv8/P9bW13OHS1pamzlHSeVAACuGijGIC6rq6s1NTe5ubnplJXtABT/+v++Hi+aGCH39/eiFiPbvLe/ABiEhITl5eWZmZt5eXnWk5jo09HGAAjzzdXbpqnPz8++AB+6IDIoKCiFhYXXBBfbAAfnAADPj5i6ABPjw8bda3DAU1zBSFHNZHAcHBwiIiLujZrPAxvcoKO1NEHjoaHCM0LBAArgkqHJeX72tLyYAACgABLEhITQlZuoABv24ejDgo6hHTChITKvFy786+TtwMeVAxK3YGDdpLPbWV710tDou73Fb3v56PS2PkO/RVq3T1nLqqfJV1rLaXTMQUq2ZW4CyJJcAAAOD0lEQVR4nO2c/VvayBaAx6DR4SNI1AgCEVlQd4lhEZEqgx+tVOxedet6r1XaRbetequ39v7/v9xzZhIIrbU8u89ic595n65CCG5ezsycM5MEQiQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSieT/n4Kpmt+EENXdX3UpFOhjHnffwFFS9X6o4LOn7hsNo2v9XdN6tnofv8F/Pz7IP35cf+xj74+1H0qMU2IlZL/LlmBb8NPnPDkwHvvg+6L6Q1GxFPyn5DUkk8lMAJOCsCALTPUQnjyMPfax90f1h6VEXdEU5B7DyS8M+e9wxmLvjMJjH3xfgGGxaCn9G6LkpGYphzF/DKWk+i8wTPBGmncEv2UYnrAsq/Sr4ZNsgTFcWkpYmtbphg8bhic1xdKUl+eG6SfDpaLmUXzAMBvOQwAtTT+gpk/yIe+HYJjIo2H+G4bYQKE9K+xlHEqAxz72/uAxLBaxL3YD2JMs0C4bzooRhqcVxdJXVSjfHvvY+6NjiIqZfD4jmBSWbjrcR89wRnF5GTcf+8D7pmO4VDwrlZ48OTp60sWtZ7afbm9nJ7R63RHUf/NHOcPpxrB4ctyqXlbXOJeI52H1nzi+aI4hs30yjiKQDxNFx/DZV/ei5FWp00TrpVOD+Mmw6DX8yuhBY1beFcznme2XbI9UT/oxJK+YU54rlsVWhV5qcEf5VwDD3LdbaevMqmOmxzZqtWFSASONvTnAw/wLoGFCcPLs/giqJjlmOcshx07F5lRlgIf5F6ieJLqGX+lcRkzXE4pjqB3GeKqwN5cHeZx/Ho/h2f2G1FSP9U4IrZ1TMY6mKn4yzHHOYAS5x5GqrUSubuWsHGjm9Ny5E0IfGVqo1y6CITHvqVVU9bWec7ByO6uUZ4pU1G+GVkIvNsh9MTRabyzXMKe0Y2oBBiR7uVLxy0ij5xQIjVXX2xdfKVRe6UXHr55jEGcnhH4yhFxXZ28uVDEf8q51wwba+j3RToiu2rbetFTCQ+gfw0swrCcsvXgh6pkCaAFcDya5pkFPT3CgFUHUn4l5b2ouGo36xJDHUMmfrBE+yFAYTj2AdOz3s0TRcTx70zLwc1ArUf8YYgzbin5BRT1jVxufcXyylGs7hievDf458BD6xpApVinRQD9KTbu5/VSs2YuZ79b2FkM7LFuhMDg5F6NtNOojQ2ilE84oalL7hk1MTWWz4XAYV2n4ik3GLcyLuZNjleI6twhhNPrYx94flyVWvxB9UI3tsroW7jXMZPLO7GrprBgT40xljuMTw+qOdYFZAg7d3oN5vMWD2HXMZDKWM4M8eQ0lKuyXGveV4eUfYpChBkQQJ7hadirLF9jcZqppObHc+EdL5EsnhH4xrDZU3kSNwtt9PoVXJrO9hhlN4TE8eSUyphvCubnHPfK+cc5b27vMWaSY+Nwwo1m8H7bEpMINoW8MVYyfQZpMLBXCFDcsFD2G+cQShhCLOJKa8ZshYBr2bknLu6tpE9mp3laqacpSYqnKp012xW2k4z4yNOyPR3juyTGEhNGTEOEVC8oZYuBKfmp2fNx/hvbuvoiUwArzikZcp7C/v8+vYCi2xPS4Mt7BJ4YGJPrn+6ItYkOtKwq7W/+cd+8a4qqhWrAjODP+2MfeL/bHfTGeoGJ9QtPvYl+uKqpiyDWjM74zVOn7fTFiomI+o7C9gvGFoXuusBac8TDoY/1zqO+3+IjCzxqC4v5HE8JlkN4LwIiz3j/n8Zv1ieHa9qQn82XY3UPnzWrDfjTcmnQTQ2ZyUr+viXaZG5ntMuIzQ1CcnCjtuUVc8j4WR2dHPMw+8qH3yeWWEJwEwf3n7mnBVDoUCqUB/qND0I+G1e2sqF/CIGg7S96pyChn2GWMMzQ06mvD0vOC4Zz6HBv9zFA4Do31KPrJEBTDR8/dQSY1NBq81xCjOOxLwywMNtvPiSsYCQa/bjg05kfDySkQLHgFHzCMDPnQMJzdem9SlV/mJAQdw3vGmqFIJOIzw5+y4ant5zY1xQxeCD5sGAn6yfByOzv1EzRRwitPV/DLdtpjKBR9Ylh9CoLnnTQR7M8wMuofw7Xt7fe2Ia40TA0Hv20oHENjs34xvHwKgpQv63sjeL/hUMcwEor4xfDire08WkyPCRm0CMG/L+lWqAtA8FEPvG9itrskPD/dN/OCRz70PlFV/1zt++fA004+uWBbIvErKvFcqWYW+By32+9UUiiohmdnIoYd1TBV/sQHPdQo2Bc/C64a5+JaEcN2tvzcqNqGarrGZsEwaLyxfnr67uIc14p7/lI86X1WSznUyuaXm/52LQ9GIXZSEhzt6LtXGDG1pe+ITTusft2ipnuMBrm4g5cYY3r7eo1Qg3gyyWLPiZi5hU7qDzp5caS7aWTaJgPDPNfdy5cVRSsd25TQVtu94FdRWG7ddNvi+bUOO9cVTbM0ph//m3qjOLfgDWI0NOQSSY/zoI1HOptCzqZBoJKYruH1B3h211IstldQzVgdn2acS9PZKV4kA021+kHXcB8Ff2iaflP1rA7X0iHvleseQ3AMlnsNwTEYH6AhnvRkOmMZOHhWWiVgmAcFvL05gw/OGrAbJeWXeLOsxvidz3jnATv0HOVyaCjtecoNeZtEr8ica9i7aXCG+ebBwa8H13UIETs7J2ioHK4fHKzusoyVn7i1YVC1m0zTFE1/e3B1tbpbYnn4OG46f6echqNf6TVM8xI1GIIpR3pRGA5jcTs/Ci+OLQzodgxhyO7wBJKx1la0+v5/uGH+BnICpb+dKVadVQmlqwwaLWteiq8VaNRLlqWXTt2/s8Jj1h14wDCywB+ZUTCLRLlhZJSH2eabBhREx3CPwrBIyQW2vo+E3+LTJLxt3sJDtq6qMT1v1Uu77tiixm/AWGHnImfE09i50tNewyFhSGx4GBmOewxJnO89eEODxtoZVHMNYaO6yuDlK5XAb7yVwn0fJbFDaLTsQCT9eW44NHafIalAxNJlryFZFpsGbagasUMw/OAxVMk1Gq5T8lKzFP2iU99Am15n0C1vxKnRiBgn052+1YfhwmBGU9cQkjd0ooYOgdrttlLV4KkRYmjsaPXMB8+3JNBCHEfcuo3ZcjHtpIVO3/IajqJ+Tyu1Z1F6MFm/M9JAIyWtW0gHMHrE6pAVdklBtdduNXhsnZPqEe7VOxm+xV4bwxjO8BDimOlmfY/hijOs4FjqGK7AJxIZGYigY6jdVoH1JoNyRb/khorWvGk22xpki/1jSqo7YHhMeybD1xBxVjUx26MD9sWIexcJzxZ41rRW4aPsvGNYSybL3U2DM1TwaiCLWZjv7qgwtKA0m8B7s1m7RdUWxvC6dypxhzGswp8Qyc8exmCVO4ZjY3xxiqf3oO1k/O6msQGVpo4hpDpdwZKMHZ4bwvDTJ41XbRP6BewXP7KUzK73qzyo/QE+llxMJUlMB1CFrUBud7O+qNqg52HbjaRrxK3aImJQCqWT9xzN32iIN7fmIJKseY6JAGua5pqOF7JZtw0+WjLco+UptY0qduAPBUo2cWkRzMoRkfi6hk4NGkLBnso7FBqUoGsIVekZzIkOV2214BjekGO8JphdUX65zB5kCz4gOdDCfyFbsGMQ42v5yXiclypO90LDsQhfQY0sC2luGOGrqqHNQdXdnbr00/Hr61erjRilZieG5PylhuX1v3nva+zA7GrnoPu+U+yFrEGdbM8ramyRI7ZrGFoB5lNuYsdsMSw2Dc7Pky14+6N4W1bHENIjzKAwTAViqE0cdfQDYhgYU3tVz9TrmVuTxoOd1sdX9bHI7s2HHsPRAc58ew33PNP1jqFpXmuY1C/4TLfKLxLWb69ahUKrccPydRiELgl1s32nj/Gs/zXDQUZP4K3aHLoxpLHfIXCZZgEar1FYx+8U0PJW+/DQKuEDbWcd5hxw4GORBYc0hHEBxxW/GKrrzJqw9Gd4t4VBVndwgo9hxUm+ld9ZNUxSW8AB1I5zbOyTIbwb6PsxpGZcGHq+BIHiKgbMD/HahLcTkBL1qqhl1ussj1kzj98ixPQr3CayvftWO4Rm5e/KUG3hoL+neuuxVj2jaZ/wkdFKMKYdNW2MMKWXdxY81TIZpdS+blEIYXIBq5Tu+LGSjkTSm2gYCm30/q/GQxE3Ww4Q01Bjt7u7u69V2q2qnU18eqiu397e7t42xKtQn67eNT8cNvcOLolRgMwyPxeNznkqzDLe1DVuk03xywtuqgzekBb4xbCkuyiKPc5UKV57gV/1hF+HaBoFcWsXLmyoql0wKWYX6qMvoZFIJJKBE1+Ewmt6Eag5G6anazjO2zU+U4g728uLZVKeTsJzBH8n+U6LYicowVO4+Jacnk4OPtM/SDkA89nAQiCwIWbsycBcZTgIvxcCGwFI53ZAnISpBRZh30WS3NgIvNiYh8fTfKcFfD0egFeiM4QsBirR9Hf2LSBxNLTjgWUicvZ0YJNP82YW4mQ+kCL2C2Feg8doaHM3mz8mM+ky7FQj8V82AsllmGhsBlamBzoj7ANuCJFyP3h7ujLyS9om6Qq+Nv2FIW7Fn9xW7LSIO86+GAbD+Hx0NPCd3QP1uWFtOZncDJRJJbCYnAskwXCzXIauVQ5UkiuBGhHewrCzE1qGAlFC5leSyfGNwU99H6LM+1k84N6MPb0RCATm8f7QQOCXRd7FABhE5uHXingH1qZJd6eNlNgUD0A/XHkB7/ruvtmsj0/c/uY+31fYJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBLJ4/A/tiqAL3FZcE0AAAAASUVORK5CYII=" alt="portfolio" />
                                    <div className="content">
                                        <h3>Web Design</h3>
                                        <a href="assets/img/portfolio-1.jpg" className="zoom-portfolio"><i className="fa fa-search-plus" /></a>
                                        <a href="https://www.appit.com.hk/en/" className="link-btn" target="_blank"><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="modal fade" id="ModalCenter" tabIndex={-1} role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="portfolio-details-content">
                                <img src="assets/img/portfolio-1.jpg" alt="portfolio" />
                                <div className="portfolio-details-text">
                                    <h4>Web Design</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries.</p>
                                    <br />
                                    <p>It is a long established fact that a reader will be distracted by the readable content of
                                        a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                        here', making it look like readable English.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <section id="testimonials" className="testimonials-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h3>Testimonials.</h3>
                        <p>See what other says About</p>
                    </div>
                    <div className="row">
                        <div className="testimonial-slider">
                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-img">
                                        <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="client" />
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>Alex Smith</h4>
                                        <span>Web Developer</span>
                                    </div>
                                    <p>Working with him is an great experince understand the business idea, delivered it by time .</p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-img">
                                        <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="client" />
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>Steven Smith</h4>
                                        <span>Wed me Good</span>
                                    </div>
                                    <p>He has build wedmeeGood wesbite and backend for us amazing experince. Extremly talented and Hard working</p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-img">
                                        <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="client" />
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>Sameer C.R</h4>
                                        <span>CEO Ryloze</span>
                                    </div>
                                    <p>Had a hand on experience in backend Fullfill our bussiness need and also Great ,perfect time of Delivery.</p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-img">
                                        <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="client" />
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>Mukesh Kahana</h4>
                                        <span>MAIL</span>
                                    </div>
                                    <p>Has worked with for bulk delivery system has great knownlege of backend and frontEnd.Eager to learn new things and Full needs </p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="testimonial-item">
                                    <div className="client-img">
                                        <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="client" />
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>Mark Wood</h4>
                                        <span>Web Developer</span>
                                    </div>
                                    <p>Has collabarte with him for one of projects Amazing experience and Learns lot of new things .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Portfolio