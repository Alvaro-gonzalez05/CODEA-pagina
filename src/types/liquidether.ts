import * as THREE from 'three';

// Tipos para el componente LiquidEther
export interface LiquidEtherProps {
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  dt?: number;
  BFECC?: boolean;
  resolution?: number;
  isBounce?: boolean;
  colors?: string[];
  style?: React.CSSProperties;
  className?: string;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

// Interface para CommonClass
export interface ICommonClass {
  width: number;
  height: number;
  aspect: number;
  pixelRatio: number;
  isMobile: boolean;
  breakpoint: number;
  fboWidth: number | null;
  fboHeight: number | null;
  time: number;
  delta: number;
  container: HTMLElement | null;
  renderer: THREE.WebGLRenderer | null;
  clock: THREE.Clock | null;
  init(container: HTMLElement): void;
  resize(): void;
  update(): void;
}

// Interface para MouseClass
export interface IMouseClass {
  mouseMoved: boolean;
  coords: THREE.Vector2;
  coords_old: THREE.Vector2;
  diff: THREE.Vector2;
  timer: NodeJS.Timeout | null;
  container: HTMLElement | null;
  _onMouseMove: (event: MouseEvent) => void;
  _onTouchStart: (event: TouchEvent) => void;
  _onTouchMove: (event: TouchEvent) => void;
  _onMouseEnter: (event: MouseEvent) => void;
  _onMouseLeave: (event: MouseEvent) => void;
  _onTouchEnd: (event: TouchEvent) => void;
  isHoverInside: boolean;
  hasUserControl: boolean;
  isAutoActive: boolean;
  autoIntensity: number;
  takeoverActive: boolean;
  takeoverStartTime: number;
  takeoverDuration: number;
  takeoverFrom: THREE.Vector2;
  takeoverTo: THREE.Vector2;
  onInteract: (() => void) | null;
  init(container: HTMLElement): void;
  dispose(): void;
  setCoords(x: number, y: number): void;
  setNormalized(nx: number, ny: number): void;
  onDocumentMouseMove(event: MouseEvent): void;
  onDocumentTouchStart(event: TouchEvent): void;
  onDocumentTouchMove(event: TouchEvent): void;
  onMouseEnter(event: MouseEvent): void;
  onMouseLeave(event: MouseEvent): void;
  onTouchEnd(event: TouchEvent): void;
  update(): void;
}

// Interface para WebGL props
export interface WebGLProps {
  resolution: number;
  viscous: number;
  iterationsViscous: number;
  iterationsPoisson: number;
  dt: number;
  BFECC: boolean;
  isBounce: boolean;
  mouse_force: number;
  cursor_size: number;
  palette: THREE.DataTexture;
}

// Interface para AutoDriver
export interface IAutoDriver {
  mouse: IMouseClass;
  manager: any;
  enabled: boolean;
  speed: number;
  resumeDelay: number;
  rampDurationMs: number;
  active: boolean;
  current: THREE.Vector2;
  target: THREE.Vector2;
  lastTime: number;
  activationTime: number;
  margin: number;
  _tmpDir: THREE.Vector2;
  pickNewTarget(): void;
  update(): void;
}