import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#3D5AFE",
  secondary: "#FF5252",
  background: "#F0F3FF",
  surface: "#DEE6FF",
  surfaceDark: "#1E2547",
  textPrimary: "#1E1E1E",
  textSecondary: "#6B6B6B",
  success: "#4CAF50",
  warning: "#FFC107",
  disabled: "#E0E0E0",
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 16,
};

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 30,
};

export const globalStyles = StyleSheet.create({
  grow: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  disabled: {
    backgroundColor: COLORS.disabled,
  },

  input: {
    height: 44,
  },
  pressed: {
    transform: [{ scale: 0.96 }],
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: FONT_SIZES.lg,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SPACING.sm,
    height: 40,
    width: 150,
  },
  inputContainer: {
    marginBottom: SPACING.sm,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.textSecondary,
    borderRadius: RADIUS.sm,
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
    color: COLORS.textPrimary,
  },
  inputLabel: {
    fontSize: FONT_SIZES.md,
    fontWeight: "500",
    color: COLORS.textPrimary,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: "500",
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
});
