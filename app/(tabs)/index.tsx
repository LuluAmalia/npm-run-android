import { View, StyleSheet, ScrollView, FlatList, Image, Text } from "react-native";

export default function Home () {
    const data = [
        {
            name: "Lulu Cantik",
            age: 20,
            city: "Jepang",
        },
        {
            name: "Somad",
            age: 16,
            city: "Korea",
        },
        {
            name: "Naufal",
            age: 13,
            city: "China",
        },
        {
            name: "Ramadhan",
            age: 5,
            city: "Jepang",
        },
        {
            name: "Andre Ardiawan",
            age: 18,
            city: "Singapura",
        },
    ];
    const renderItem = ({item}) => {
        return (
            <View style={style.container2}>
                <Text style={style.text1}>{item.name}</Text>
                <Text style={style.text2}>{item.age}</Text>
                <Text style={style.text3}>{item.city}</Text>
            </View>
        );
    };
    return (
         <View style={style.container}>
            <ScrollView>
                <View>
                    <Image
                        source={{uri:"https://reactnative.dev/img/tiny_logo.png"}}
                        style={style.image}
                        resizeMode="contain"
                        />
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                        />                    
                </View>
            </ScrollView>
        </View>
    );
}
const style = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: '#e8f5e9',
        borderRadius:10,
        padding:5,
    },      
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#32485C"
    },
    text1:{
        fontSize : 20,
        fontWeight : 'bold',
        color : 'green',
    },
    text2:{
        fontSize : 20,
        fontWeight : '400',
        color : 'black',
    },
    text3:{
        fontSize : 20,
        fontWeight :'bold',
        color : 'black',
    },
    container2: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#EABCAC",  
        width: 300,
        borderRadius: 30,
        padding: 5,
        margin: 20,
        backgroundColor: "#E2B091",
    }
    
});