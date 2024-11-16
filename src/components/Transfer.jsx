import React from 'react'
import BoxCheck from '../images/bx-check-circle.svg'
import LearnMore from '../images/learnmore.svg'
import SendMoney from '../images/sendmoneyto.svg'
import PayMentTo from '../images/Easy Payments.svg'
import NewCash from '../images/newcash.svg'
import Contacts from '../images/contacts.svg'


const Transfer = () => {
  return (
    <section aria-label="transfer-features" class="transfer">
        <div class="container grid-layout">
            <div class="text1">
                <h2>Make your money transfer simple and clear</h2>
                <div class="transfer-grid">
                    <div class="transfer-card">
                        <div class="icon-container">
                            <img src={BoxCheck} alt=""/>
                        </div>
                        <div class="space-y-1">
                            <p>Banking transactions are free for you</p>
                        </div>
                    </div>
                </div>
                <div class="transfer-grid">
                    <div class="transfer-card">
                        <div class="icon-container">
                            <img src={BoxCheck} alt=""/>
                        </div>
                        <div class="space-y-1">
                            <p>No monthly cash commission</p>
                        </div>
                    </div>
                </div>
                <div class="transfer-grid">
                    <div class="transfer-card">
                        <div class="icon-container">
                            <img src={BoxCheck} alt=""/>
                        </div>
                        <div class="space-y-1">
                            <p>Manage payments and transactions online</p>
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <a class="learn-more" href="#"><img src={LearnMore} alt="learnmore"/></a>
                </div>
            </div>
            <div class="transfer-mobile">
                <img src={SendMoney} alt="Send Money"/>
            </div>
            <div class="text2 space-y-1">
                <h2 class="receive-headline">Receive payment from international bank details</h2>
                <div class="payment-grid">
                    <div class="payment-card-flex">
                        <div class="payment">
                            <img src={PayMentTo} alt=""/>
                        </div>
                        <div class="space-y-1">
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                    </div>
                    <div class="payment-card-flex">
                        <div class="payment">
                            <img src={NewCash} alt=""/>
                        </div>
                        <div class="space-y-1">
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <a class="learn-more" href="#"><img src={LearnMore} alt="learnmore"/></a>
                </div>
            </div>
            <div class="contacts-mobile">
                <img src={Contacts} alt="Contacts"/>
            </div>
        </div>
    </section>
  )
}

export default Transfer
