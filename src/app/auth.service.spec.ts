import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AuthService } from './auth.service';


/*describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    /*TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = new AuthService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
}); */

/* describe('Component : Login',  () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

    it('canLogin returns false when the user is not authenticated', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(false);
      expect(component.needsLogin()).toBeTruthy();
      expect(authService.isAuthenticated).toHaveBeenCalled();
    });

    it('canLogin returns false when the user is not authenticated', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(true);
      expect(component.needsLogin()).toBeFalsy();
      expect(authService.isAuthenticated).toHaveBeenCalled();
    });

  });
}); */


