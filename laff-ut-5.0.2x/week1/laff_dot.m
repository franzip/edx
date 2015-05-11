function [ alpha ] = laff_dot( x, y )

% y = laff_dot( x, y ) computes the dot product of vectors x and y
%   Vectors x and y can be a mixture of column and/or row vector.  In other
%   words, x and y can be n x 1 or 1 x n arrays.  However, one size must 
%   equal 1 and the other size equal n.  

% Extract the row and column sizes of x and y
[m_x, n_x] = size(x);
[m_y, n_y] = size(y);

% Check if x and y are proper vectors
if (m_x ~= 1 & n_x ~= 1) | (m_y ~= 1 & n_y ~= 1 |  m_x * n_x ~= m_y * n_y)
    alpha = 'FAILED';
    return
end

% Initialize alpha
alpha = 0;

if (n_x == 1)     % x is a column vector
    if (n_y == 1)     % y is a column vector
        % Accumulate products into alpha
        for i=1:m_x   
            alpha = alpha + y(i,1) * x(i,1);
        end
    else     % y is a row vector
        % Accumulate products into alpha
        for i=1:m_x   
            alpha = alpha + y(1,i) * x(i,1);
        end
    end
else    % x is a row vector
    if (n_y == 1)     % y is a column vector
        % Accumulate products into alpha
        for i=1:n_x   
            alpha = alpha + y(i,1) * x(1,i);
        end
    else     % y is a row vector
        % Accumulate products into alpha
        for i=1:n_x   
            alpha = alpha + y(1,i) * x(1,i);
        end
    end
end

return
end

