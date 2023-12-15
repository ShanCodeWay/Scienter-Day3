import { StyleSheet } from 'react-native';

const errorModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 60,
    borderRadius: 20,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export { errorModalStyles };
