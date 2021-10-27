import { StyleSheet } from "react-native";

export const containerStyles = StyleSheet.create({
  backgroundColorWhite: {
    backgroundColor: "#FFFFFF",
  },
  backgroundColorBlack: {
    backgroundColor: "#000000",
  },
  backgroundColorDarkYellow: {
    backgroundColor: "#FDC017",
  },
  backgroundColorLightGrey: {
    //backgroundColor: "#F8F9FB",
    backgroundColor: "#AAAAAA",
  },
  backgroundColorRed: {
    backgroundColor: "#FF0000",
  },
  borderColorLightBlue: {
    borderColor: "#6F7FF7",
  },
  borderWidth1px: {
    borderWidth: 1,
  },
  borderRadius5px: {
    borderRadius: 5,
  },
  borderRadius10px: {
    borderRadius: 10,
  },
  backgroundSafeAreaView: {
    width: "100%",
    height: "100%",

    paddingLeft: 16,
    paddingRight: 16,
  },
  backgroundSafeAreaViewPadding50px35px50px35px: {
    width: "100%",
    height: "100%",

    paddingTop: 50,
    paddingRight: 35,
    paddingBottom: 50,
    paddingLeft: 35,
  },
  backgroundSafeAreaViewNoPadding: {
    width: "100%",
    height: "100%",
  },
  //flex column
  flexColumnStartStart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  flexColumnStartCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flexColumnCenterCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  flexColumnSpaceBetweenStart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  flexColumnEndCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  //flex row
  flexRowStartCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flexRowStartStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  flexRowEndCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  flexRowEndStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  flexRowCenterCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flexRowSpaceBetweenCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexRowSpaceEvenlyCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  width80Percent: {
    width: "80%",
  },
  width100Percent: {
    width: "100%",
  },
  width150Percent: {
    width: "150%",
  },
  padding5px: {
    padding: 5,
  },
  paddingTopAndBottom25px: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  flexGrow10: {
    flexGrow: 10,
  },
  circleRadius25px: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  circleRadius30px: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  circleRadius35px: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  circleRadius40px: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  //OLD STYLES
  fullWidthMaxHeight: {
    width: "100%",
    flexGrow: 10,
  },
  flexColumnStart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  fullWidthHorizontal: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  fullWidthHorizontalSpaceBetween: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexColumnCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flexFullWidthColumnCenterCenter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",

    width: "100%",
    height: "100%",
  },
  flexCenter72x72Border1px: {
    width: 72,
    height: 72,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  borderColorNeutralGrey: {
    borderColor: "#EBF0FF",
  },

  topBarView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    paddingBottom: 28,
  },
  topBarSubView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sortBySelectorContainer: {
    width: "100%",
    height: 54,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export const margins = StyleSheet.create({
  marginLeftAndRight5px: {
    marginLeft: 5,
    marginRight: 5,
  },
  marginTopAndBottom16px: {
    marginTop: 16,
    marginBottom: 16,
  },
  margin2px: {
    margin: 2,
  },
  marginRight10px: {
    marginRight: 10,
  },
  marginRight12px: {
    marginRight: 12,
  },
  marginBottom12px: {
    marginBottom: 12,
  },
  marginTop24px: {
    marginTop: 24,
  },
  marginTopAndBottom16px: {
    marginTop: 16,
    marginBottom: 16,
  },
  marginLeftAndRight20px: {
    marginLeft: 20,
    marginRight: 20,
  },
  marginTop24px: {
    marginTop: 24,
  },
  marginBottom16px: {
    marginBottom: 16,
  },
  marginView70pxHeight: {
    width: "100%",
    height: 70,
  },
  marginTop4pxBottom16px: {
    marginTop: 4,
    marginBottom: 16,
  },
});

export const paddings = StyleSheet.create({
  paddingTop16px: {
    paddingTop: 16,
  },
});

export const textColors = StyleSheet.create({
  text_Red: {
    color: "#FF0000",
  },
  text_Black: {
    color: "#000000",
  },
  text_White: {
    color: "#FFFFFF",
  },
  text_LightBlue: {
    color: "#6F7FF7",
  },
  text_NeutralDark: {
    color: "#223263",
  },
  text_NeutralGrey: {
    color: "#9098B1",
  },
  text_Orange: {
    color: "#F59B2D",
  },
  text_Red: {
    color: "#FB7181",
  },
});

export const textStyles = StyleSheet.create({
  text_Normal24px: {
    fontStyle: "normal",
    fontSize: 24,
  },
  text_Poppins_400_normal_12: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  text_Poppins_700_normal_12: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  text_Poppins_700_normal_14: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  text_Poppins_700_normal_16: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  text_Poppins_700_normal_24: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 0.5,
  },
});

export const zIndices = StyleSheet.create({
  zIndex50: {
    zIndex: 50,
  },
  zIndex100: {
    zIndex: 100,
  },
});

export const textInputStyles = StyleSheet.create({
  writeReviewTextInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    height: 160,
    borderColor: "#EBF0FF",
    padding: 16,
  },
});

export const shapes = StyleSheet.create({
  homeIndicator: {
    backgroundColor: "#D1D6E8",

    width: 134,
    height: 5,

    borderRadius: 100,

    opacity: 50,
    marginTop: 50,
    marginBottom: 8,
  },
  topBarBorderView: {
    width: "150%",
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
    marginTop: 16,
  },
});
