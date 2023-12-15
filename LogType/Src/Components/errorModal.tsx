import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

import { errorModalStyles } from './errorModalStyles.tsx';

interface ErrorModalProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isVisible, message, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={errorModalStyles.modalContainer}>
        <View style={errorModalStyles.modalContent}>
          <Text style={errorModalStyles.messageText}>{message}</Text>
          <TouchableOpacity style={errorModalStyles.closeButton} onPress={onClose}>
            <Text style={errorModalStyles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
