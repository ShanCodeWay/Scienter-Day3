import { 
    AppbarImage,Image
} from  '../Imports/imports';

const navigatorStyles = {
    headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0.6,
        borderColor: '#fff',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        
      },
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 35,
        fontFamily: 'Arial',
        textAlign: 'center',
        
      },
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Image
          source={AppbarImage}
          style={{ flex: 1, width: '300%', height: '100%', resizeMode: 'cover' }}
        />
      ),
};
export { navigatorStyles };