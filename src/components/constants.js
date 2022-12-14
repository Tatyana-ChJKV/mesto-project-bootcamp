// profile
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const profileId = document.querySelector('.profile__id');
// popupProfile
export const popupProfile = document.querySelector('#popup-profile');
export const popupEditProfileButton = document.querySelector('.profile__edit-button');
export const popupProfileName = document.querySelector('#popup-form-name');
export const popupProfileInfo = document.querySelector('#popup-form-info');
export const submitPopupProfileButton = popupProfile.querySelector('.popup__button');
// popupProfileAvatar
export const popupProfileAvatar = document.querySelector('#popup-profile-avatar');
export const avatarEditButton = document.querySelector('.profile__avatar-edit-button');
export const popupProfileAvatarUrl = document.querySelector('#popup-profile-url');
export const submitProfileAvatarButton = popupProfileAvatar.querySelector('.popup__button');

// popupPlaces
export const popupPlaces = document.querySelector('#popup-places');
export const addPlaceButton = document.querySelector('.profile__add-button');
export const popupPlacesImageName = document.querySelector('#popup-form-place');
export const popupPlacesImageUrl = document.querySelector('#popup-form-link');
export const submitPopupPlacesButton = popupPlaces.querySelector('.popup__button');

// popupFullSizeImage
export const popupFullSize = document.querySelector('#popup-full-image');
export const popupFullSizeImage = document.querySelector('.popup__image');
export const popupFullSizeImageDescription = document.querySelector('.popup__image-description');
// common
export const closePopupButtons = Array.from(document.querySelectorAll('.popup__close-button'));
export const popups = [popupProfile, popupProfileAvatar, popupPlaces, popupFullSize];
export const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-inactive',
    inputErrorClass: 'popup__form-text-error',
    errorClass: 'popup__input-error-active'
};