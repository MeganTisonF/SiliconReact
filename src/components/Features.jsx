import React from 'react'
import PhoneCard from '../images/phonecard.svg'
import EasyPayments from '../images/Easy Payments.svg'
import Data from '../images/Data Security.svg'
import Cost from '../images/Cost Statistics.svg'
import Support from '../images/Support 24.svg'
import CashBack from '../images/Regular Cashbacl.svg'
import Top from '../images/Top Standards.svg'

const Features = () => {
  return (
    <section aria-label="App features" className="features">
    <div className="container">
        <div className="iphone">
            <img src={PhoneCard} alt="phonecard"/>
        </div>
        <div className="text space-y-1">
            <h1 className="h1">App Features</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

            <div className="features-grid">
                <div className="features-card flex">
                    <div className="icon-container">
                        <img src={EasyPayments} alt=""/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Easy Payments</h3>
                        <p className="text-m">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>
                <div className="features-card flex">
                    <div className="icon-container">
                        <img src={Data} alt=""/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Data Security</h3>
                        <p className="text-m">Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </div>
                </div>
                <div className="features-card flex">
                    <div className="icon-container">
                        <img src={Cost} alt=""/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Cost Statistics</h3>
                        <p className="text-m">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>
                <div className="features-card flex">
                    <div className="icon-container">
                        <img src={Support} alt=""/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Support 24/7</h3>
                        <p className="text-m">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                </div>
                <div className="features-card flex">
                    <div className="icon-container">
                        <img src={CashBack} alt=""/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Regular Cashback</h3>
                        <p className="text-m">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                </div>
                <div className="features-card flex">
                    <div className="icon-container">
                        <img src={Top} alt=""/>
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Top Standards</h3>
                        <p className="text-m">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features
