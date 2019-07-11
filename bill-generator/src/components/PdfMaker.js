import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom'


const styles = StyleSheet.create({
    page:{
        flexDirection: 'row',
        backgroundColor: '#e4e4e4'

    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        fontSize: 18,
        width: 200,
        '@media max-width: 400': {
            width: 300,
        },
        '@media orientation: landscape':{
            width:400,
        },
    }
});

const MyDocument = (props) =>(
    <Document>
        <Page sier="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>{props.text}</Text>
            </View>
        </Page>
    </Document>
);   

export const renderPDFInDOM = (text) => {
    const Wrapper = ()=>(
        <div>
            <MyDocument text={text}/>
        </div>
    )

    ReactDOM.render(<Wrapper/>, document.getElementById('pdf'))
}