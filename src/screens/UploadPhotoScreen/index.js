import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, LinkButton} from '../../components';
import {AddBtn, PhotoNull} from '../../assets';
import {COLORS} from '../../constants/COLORS';
import {FONTS} from '../../constants/FONTS';

const UploadPhotoScreen = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.imgConteiner}>
          <View style={styles.avatarWrapper}>
            <Image source={PhotoNull} style={styles.avatar} />
            <AddBtn style={styles.addBtn} />
          </View>
          <Gap height={26} />
          <Text style={styles.name}>Arthur Darwanto</Text>
          <Gap height={4} />
          <Text style={styles.profession}>Software Engineer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <LinkButton label="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhotoScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 64,
  },
  imgConteiner: {alignItems: 'center', flex: 1, justifyContent: 'center'},

  avatar: {width: 110, height: 110},
  avatarWrapper: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 120 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: COLORS.text.default,
    fontFamily: FONTS.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: FONTS.primary.normal,
    textAlign: 'center',
    color: COLORS.text.secondary,
  },
});
