import React, { lazy, useCallback, Suspense } from 'react';

const Icon = ({
  lib,
  iconName,
  size,
  color,
}) => {
  const MaterialIcon = lazy(() => import('react-native-vector-icons/MaterialIcons'));
  const AntDesignIcon = lazy(() => import('react-native-vector-icons/AntDesign'));
  const FontAwesomeIcon = lazy(() => import('react-native-vector-icons/FontAwesome'));
  const Ionicon = lazy(() => import('react-native-vector-icons/Ionicons'));

  const handleIconName = useCallback(() => {
    switch (lib) {
      case 'MaterialDesign':
        return <MaterialIcon name={iconName} size={size} color={color} />;
      case 'AntDesign':
        return <AntDesignIcon name={iconName} size={size} color={color} />;
      case 'FontAwesome':
        return <FontAwesomeIcon name={iconName} size={size} color={color} />;
      case 'Ionic':
        return <Ionicon name={iconName} size={size} color={color} />;
      default:
        return null;
    }
  }, [lib, iconName]);

  return (
    <Suspense fallback={null}>
      {handleIconName()}
    </Suspense>
  );
};

export default Icon;
