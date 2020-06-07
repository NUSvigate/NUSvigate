import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ScrollView } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default class ServicesFinancialAidContainer extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>

                <Image
                    style={styles.image}
                    source={require('../assets/header.png')}
                />

                <Hyperlink
                    linkStyle={ {color: '#2980b9'} }
                    linkDefault
                >
                    <Text style={styles.header}>
                        What are the types of supporting documents I must submit to apply for my
                        NUS Financial Aid application?
                    </Text>

                    <Text style={styles.text}>
                        1. Log on to https://myaces.nus.edu.sg/webroapsbs/jsp/login.jsp to generate
                            the application form. {'\n'}
                        2. The types of relevant supporting documents for submission are listed on
                            the first page for your reference.
                    </Text>

                    <Text style={styles.header}>
                        {'\n'}
                        When should I submit the relevant documents to support my
                        NUS Financial Aid application?
                    </Text>

                    <Text style={styles.text}>
                        Documents need to be submitted within two weeks from the online submission
                        date of application. {'\n'} {'\n'}
                        You may submit the 'Application Form (Summary)' together with all the
                        relevant supporting documents by hand or mail to the Office of Financial Aid
                        (within Office of Admissions) at the following address:
                    </Text>

                    <Text style={styles.address}>
                        Office of Admissions (Attn: Office of Financial Aid)
                        National University of Singapore University Town,
                        2 College Avenue West,
                        #01-03 (Stephen Riady Centre) Singapore 138607
                    </Text>

                    <Text style={styles.openingHours}>
                        Opening Hours: {'\n'}
                        Mondays to Thursdays: 8.30am – 6.00pm {'\n'}
                        Fridays: 8.30am – 5.30pm {'\n'}
                        Weekends and Public Holidays: Closed {'\n'}
                        Collection Box: available 24 hours every day {'\n'}
                        (located outside the office’s main entrance – on the left)
                    </Text>

                    <Text style={styles.header}>
                        {'\n'}
                        How do I submit my supporting documents and payment if I have applied
                        through online submission? How do I check if my supporting documents and
                        payment have been received?
                    </Text>

                    <Text style={styles.subHeader}>
                        International Applicants
                    </Text>

                    <Text style={styles.text}>
                        Submit your documents through one of the following methods: {'\n'} {'\n'}
                        1. Upload your documents electronically via the 'Online Submission of
                        Supporting Document' facility and select payment of application fee via
                        credit card after you login to the Online Application Status Facility (OASF). {'\n'}
                        {'\n'}

                        After which, you may login to the Online Application Status Facility 2-3
                        weeks after submission to check the status. {'\n'} {'\n'}

                        2. Submit your supporting documents by postal delivery and make payment of
                        your application fee by bank draft (the bank draft must be made payable to
                        "National University of Singapore" and can be cleared at a bank in
                        Singapore). {'\n'}
                        - Please write your full name and application number on the reverse side of
                        the bank draft/cheque (if applicable) and on each document to facilitate us
                        in matching them to your application. {'\n'} {'\n'}
                        For more details, click
                        http://www.nus.edu.sg/oam/apply-to-nus/international-qualifications/when-you-apply/payment-of-application-fee.
                        {'\n'}

                        {'\n'}
                        After which, you can check the status of receipt at the Online Application
                        Status Facility 3-8 weeks after posting them.
                        {'\n'}
                    </Text>

                    <Text style={styles.subHeader}>
                        Local Applications
                    </Text>

                    <Text style={styles.text}>
                        Submit your documents through one of the following methods: {'\n'} {'\n'}

                        1. Upload your documents electronically via the 'Online Submission of
                        Supporting Document' facility after you login to the Online Application
                        Status Facility - strongly recommended to facilitate prompt receipt and
                        processing of your application. {'\n'} {'\n'}
                        2. Submit your supporting documents via postal delivery or deposit them in
                        collection boxes at our office (write your full name and application on all
                        pages of your document).  {'\n'}

                        For application fee payment modes, click
                        http://www.nus.edu.sg/oam/apply-to-nus/when-you-apply/payment-of-application-fee
                        for details. {'\n'}

                        {'\n'}
                        You may login to the OASF to check the status of your document submission
                        and payment of application fee.
                        {'\n'}
                    </Text>

                    <Text style={styles.header}>
                        How can I check my Financial Aid application status?
                    </Text>

                    <Text style={styles.text}>
                        You can check the status of your application via the same Undergraduate
                        Financial Aid Portal using your student number (current student) or
                        admission application number (prospective student). {'\n'}
                    </Text>

                    <Text style={styles.header}>
                        I am in financial difficulty but the Financial Aid application deadline is
                        over. What should I do?
                    </Text>

                    <Text style={styles.text}>
                        Please note that late application for financial aid is strictly discouraged
                        as this will impact the administration and efficient allocation of funds.
                        If you are in need of financial assistance after the application deadline,
                        you may login to state the reason(s) for your late application and proceed
                        to apply accordingly. We will consider your application on a case-by-case
                        basis. {'\n'}
                    </Text>

                    <Text style={styles.header}>
                        Once my eligibility for financial aid is determined, what is the amount of
                        aid I can expect to receive?
                    </Text>

                    <Text style={styles.text}>
                        Eligible financial aid applicants may be offered one or a combination of the
                        loans, bursaries and/or work-study scheme options. The amount of aid offered
                        will depend on the assessed level of neediness of the applicant and his/her
                        nationality. {'\n'} {'\n'}
                        For the relatively needy Singaporean students, you can expect
                        that up to 100% of your study expenses can be covered. {'\n'} {'\n'}
                        For non-Singaporean students, you are advised to use our
                        http://www.nus.edu.sg/oam/financial-aid/financial-needs-calculator
                        to estimate your out-of-pocket expenses.
                    </Text>
                </Hyperlink>
            </ScrollView>
        )
    }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edd5c0'
    },
    image: {
        height: windowHeight / 15,
        width: windowWidth / 3,
        marginLeft: 10,
        marginTop: 10
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginHorizontal: 20,
        marginVertical: 10
    },
    text: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 14
    },
    address: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 13,
        color: 'blue',
        marginTop: 10
    },
    openingHours: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 13,
        marginTop: 10
    },
    subHeader: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 14,
        textDecorationLine: 'underline'
    }
})
