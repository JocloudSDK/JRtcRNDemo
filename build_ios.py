import os

if __name__ == "__main__":
    os.system('rm -rf ./ios/main.jsbundle')
    os.system('react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ./release_ios/main.jsbundle --assets-dest ./release_ios/')

    os.system('cp release_ios/main.jsbundle ios/')