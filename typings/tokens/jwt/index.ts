import { Header } from './artifacts/header'
import {
  AICPayload,
  AlastriaSessionPayload,
  AlastriaTokenPayload,
  CredentialPayload,
  PresentationPayload,
  PresentationRequestPayload
} from './artifacts/payloads'

export { createAlastriaSessionFn } from './functions'

export interface AIC {
  readonly header: Header
  readonly payload: AICPayload
}

export interface AlastriaSession {
  readonly header: Header
  readonly payload: AlastriaSessionPayload
}

export interface AlastriaToken {
  readonly header: Header
  readonly payload: AlastriaTokenPayload
}

export interface Credential {
  readonly header: Header
  readonly payload: CredentialPayload
}

export interface Presentation {
  readonly header: Header
  readonly payload: PresentationPayload
}

export interface PresentationRequest {
  readonly header: Header
  readonly payload: PresentationRequestPayload
}